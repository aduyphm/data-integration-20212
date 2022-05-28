import scrapy
from news.items import NewsItem
from datetime import datetime

CATEGORIES = {
    'thoi-su': 'Thời sự',
    'the-gioi': 'Thế giới',
    'tai-chinh-kinh-doanh': 'Kinh tế',
    'giai-tri': 'Giải trí',
    'the-thao': 'Thể thao',
    'giao-duc': 'Giáo dục',
    'suc-khoe': 'Sức khoẻ',
    'doi-song': 'Đời sống',
    'cong-nghe': 'Công nghệ',
}

class ThanhNienSpider(scrapy.Spider):
    name = 'thanhnien'
    allowed_domains = ['thanhnien.vn']
    start_urls = [
        'https://thanhnien.vn/thoi-su/',
        'https://thanhnien.vn/the-gioi/',
        'https://thanhnien.vn/tai-chinh-kinh-doanh/',
        'https://thanhnien.vn/giai-tri/',
        'https://thanhnien.vn/the-thao/',
        'https://thanhnien.vn/giao-duc/',
        'https://thanhnien.vn/suc-khoe/',
        'https://thanhnien.vn/doi-song/',
        'https://thanhnien.vn/cong-nghe/'
    ]

    def parse(self, response):
        
        list_news = response.css('.story')
        for news in list_news:

            detail_link = news.css('h2 a::attr(href)').extract_first()
            if detail_link == None: continue

            thumbnail = news.css('img::attr(data-src)').extract_first()
            if thumbnail == None:
                thumbnail = news.css('img::attr(src)').extract_first()
            category = CATEGORIES[response.url.split('/')[3]]
        
            yield response.follow(detail_link, self.parse_detail, meta={'thumbnail': thumbnail, 'category': category})

        # follow all pagination links
        # pagination_links = response.css('#paging ul > li.active + li > a::attr(href)')
        # yield from response.follow_all(pagination_links, self.parse)

    def parse_detail(self, response):
        def extract_with_css(query):
            return response.css(query).get(default='').strip()

        metaDate = response.css('.details__meta .meta time::text').re(
            r'([0-9]{,2}:[0-9]{,2} - [0-9]{,2}\/[0-9]{,2}\/[0-9]{4})')
        if len(metaDate) > 0:
            date = datetime.strptime(metaDate[0], '%H:%M - %d/%m/%Y')
        else:
            date = ''

        metaDescription = response.css('meta[name="description"]').re(r'content="(.*)">')

        if len(metaDescription) > 0:
            sapo = metaDescription[0]
        else:
            sapo = ''

        item = NewsItem()

        item['title'] = extract_with_css('.details__headline::text')
        item['link'] = response.url
        item['thumbnail'] = response.meta.get('thumbnail')
        item['sapo'] = sapo
        item['category'] = response.meta.get('category')
        item['source'] = response.url.split("/")[2]
        item['release_time'] = date

        yield item