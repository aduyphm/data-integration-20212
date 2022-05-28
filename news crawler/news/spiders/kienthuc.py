import scrapy
from news.items import NewsItem
import dateparser

CATEGORIES = {
    'the-gioi': 'Thế giới',
    'giai-tri': 'Giải trí',
    'the-thao': 'Thể thao',
    'khoa-hoc': 'Khoa học',
    'cong-nghe': 'Công nghệ',
}

class KienthucSpider(scrapy.Spider):
    name = 'kienthuc'
    allowed_domains = ['kienthuc.net.vn']
    start_urls = [
        'https://kienthuc.net.vn/the-gioi/',
        'https://kienthuc.net.vn/the-thao/',
        'https://kienthuc.net.vn/khoa-hoc/',
        'https://kienthuc.net.vn/cong-nghe/',
        'https://kienthuc.net.vn/giai-tri/',
    ]

    def parse(self, response):
        
        list_news = response.css('.story')
        for news in list_news:

            detail_link = news.css('h2 > a::attr(href)').extract_first()
            if detail_link == None: continue

            thumbnail = news.css('img::attr(data-src)').extract_first()
            if thumbnail == None:
                thumbnail = news.css('img::attr(src)').extract_first()
            category = CATEGORIES[response.url.split('/')[3]]

            yield response.follow(detail_link, self.parse_detail, meta={'thumbnail': thumbnail, 'category': category})

        # follow all pagination links
        # pagination_links = response.css('.pagination li>a::attr(href)')[-1]
        # yield from response.follow_all(pagination_links, self.parse)

    def parse_detail(self, response):
        metaTitle = response.css(
            'meta[property="og:title"]').re(r'content="(.*)">')
        metaDesc = response.css(
            'meta[name="description"]').re(r'content="(.*)">')

        item = NewsItem()

        item['title'] = metaTitle[0] if len(metaTitle) > 0 else ''
        item['link'] = response.url
        item['thumbnail'] = response.meta.get('thumbnail')
        item['sapo'] = metaDesc[0] if len(metaDesc) > 0 else ''
        item['category'] = response.meta.get('category')
        item['source'] = response.url.split("/")[2]
        item['release_time'] = dateparser.parse(response.css('.cms-date').re(r'content="(.*)"')[0])

        yield item