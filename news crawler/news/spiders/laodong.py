import scrapy
from news.items import NewsItem
from datetime import datetime

CATEGORIES = {
    'thoi-su': 'Thời sự',
    'the-gioi': 'Thế giới',
    'phap-luat': 'Pháp luật',
    'kinh-te': 'Kinh tế',
    'giai-tri': 'Giải trí',
    'the-thao': 'Thể thao',
    'giao-duc': 'Giáo dục',
    'suc-khoe': 'Sức khoẻ',
}

class LaodongSpider(scrapy.Spider):
    name = 'laodong'
    allowed_domains = ['laodong.vn']
    start_urls = [
        'https://laodong.vn/thoi-su/',
        'https://laodong.vn/the-gioi/',
        'https://laodong.vn/phap-luat/',
        'https://laodong.vn/kinh-te/',
        'https://laodong.vn/giai-tri/',
        'https://laodong.vn/the-thao/',
        'https://laodong.vn/suc-khoe/',
        'https://laodong.vn/giao-duc/',
    ]

    def parse(self, response):
        
        list_news = response.css('article.article-large')
        for news in list_news:

            detail_link = news.css('header a::attr(href)').extract_first()
            if detail_link == None: continue

            thumbnail = news.css('img::attr(data-src)').extract_first()
            if thumbnail == None:
                thumbnail = news.css('img::attr(src)').extract_first()
            category = CATEGORIES[response.url.split('/')[3]]

            yield response.follow(detail_link, self.parse_detail, meta={'thumbnail': thumbnail, 'category': category})

        # follow all pagination links
        # pagination_links = response.css('ul.pagination li.active + li a::attr(href)')
        # yield from response.follow_all(pagination_links, self.parse)

    def parse_detail(self, response):
        metaTitle = response.css(
            'meta[property="og:title"]').re(r'content="(.*)">')
        metaDesc = response.css(
            'meta[name="description"]').re(r'content="(.*)">')
        metaDate = response.css('.time time::text').re(
            r'([0-9]{,2}\/[0-9]{,2}\/[0-9]{4} \| [0-9]{,2}:[0-9]{,2})')
        if len(metaDate) > 0:
            date = datetime.strptime(metaDate[0], '%d/%m/%Y | %H:%M')
        else:
            date = ''

        item = NewsItem()

        item['title'] = metaTitle[0] if len(metaTitle) > 0 else ''
        item['link'] = response.url
        item['thumbnail'] = response.meta.get('thumbnail')
        item['sapo'] = metaDesc[0] if len(metaDesc) > 0 else ''
        item['category'] = response.meta.get('category')
        item['source'] = response.url.split("/")[2]
        item['release_time'] = date

        yield item