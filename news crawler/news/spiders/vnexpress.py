import scrapy
from news.items import NewsItem
from datetime import datetime

CATEGORIES = {
    'thoi-su': 'Thời sự',
    'the-gioi': 'Thế giới',
    'kinh-doanh': 'Kinh tế',
    'giai-tri': 'Giải trí',
    'the-thao': 'Thể thao',
    'phap-luat': 'Pháp luật',
    'giao-duc': 'Giáo dục',
    'suc-khoe': 'Sức khoẻ',
    'doi-song': 'Đời sống',
    'du-lich': 'Du lịch',
    'khoa-hoc': 'Khoa học',
}

class VnexpressSpider(scrapy.Spider):
    name = 'vnexpress'
    allowed_domains = ['vnexpress.net']
    start_urls = [
        'https://vnexpress.net/thoi-su',
        'https://vnexpress.net/the-gioi',
        'https://vnexpress.net/kinh-doanh',
        'https://vnexpress.net/giai-tri',
        'https://vnexpress.net/the-thao',
        'https://vnexpress.net/phap-luat',
        'https://vnexpress.net/giao-duc',
        'https://vnexpress.net/suc-khoe',
        'https://vnexpress.net/doi-song',
        'https://vnexpress.net/du-lich',
        'https://vnexpress.net/khoa-hoc',
    ]

    def parse(self, response):
        
        list_news = response.css('.item-news.item-news-common')
        for news in list_news:
            if news.css('h3 a::text').extract_first() == None:
                continue

            detail_link = news.css('h3 a::attr(href)').extract_first()
            if detail_link == None: continue

            thumbnail = news.css('img::attr(data-src)').extract_first()
            if thumbnail == None:
                thumbnail = news.css('img::attr(src)').extract_first()
            category = CATEGORIES[response.url.split('/')[3]]

            yield response.follow(detail_link, self.parse_detail, meta={'thumbnail': thumbnail, 'category': category})

        # follow all pagination links
        # pagination_links = response.css('.next-page::attr(href)')
        # yield from response.follow_all(pagination_links, self.parse)

    def parse_detail(self, response):
        def extract_with_css(query):
            return response.css(query).get(default='').strip()

        metaDate = response.css('.header-content .date::text').re(
            r'([0-9]{,2}\/[0-9]{,2}\/[0-9]{4}, [0-9]{,2}:[0-9]{,2})')
        if len(metaDate) > 0:
            date = datetime.strptime(metaDate[0], '%d/%m/%Y, %H:%M')
        else:
            date = ''

        item = NewsItem()

        item['title'] = extract_with_css('.title-detail::text')
        item['link'] = response.url
        item['thumbnail'] = response.meta.get('thumbnail')
        item['sapo'] = extract_with_css('.description::text')
        item['category'] = response.meta.get('category')
        item['source'] = response.url.split("/")[2]
        item['release_time'] = date

        yield item