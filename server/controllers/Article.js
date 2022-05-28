const ArticleModel = require('../models/Article');
const httpStatus = require("../utils/httpStatus");

const categoryConvert = {
    'thoi-su': 'Thời sự',
    'the-gioi': 'Thế giới',
    'kinh-te': 'Kinh tế',
    'giai-tri': 'Giải trí',
    'the-thao': 'Thể thao',
    'giao-duc': 'Giáo dục',
    'suc-khoe': 'Sức khỏe',
    'doi-song': 'Đời sống',
    'phap-luat': 'Pháp luật',
    'du-lich': 'Du lịch',
    'cong-nghe': 'Công nghệ',
    'khoa-hoc': 'Khoa học'
}

const articleController = {};

articleController.create = async (req, res, next) => {
    try {
        const {
            title,
            link,
            thumbnail,
            sapo,
            category,
            source,
            release_time
        } = req.body;

        const newArticle = new ArticleModel({
            title: title,
            link: link,
            thumbnail: thumbnail,
            sapo: sapo,
            category: category,
            source: source,
            release_time: release_time
        });

        try { 
            const savedArticle = await newArticle.save();
            res.status(httpStatus.CREATED).json({
                data: newArticle
            })
        } catch (e) {
            return res.status(httpStatus.BAD_REQUEST).json({
                message: e.message
            })
        }

    } catch (e) {
        return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
            message: e.message
        });
    }
}

articleController.search = async (req, res, next) => {
    try {
        const {
            query
        } = req.body;

        const results = await ArticleModel.find({
            $or: [ { title: new RegExp(query, "i") }, { sapo: new RegExp(query, "i") } ]
        }).sort({release_time: -1})

        return res.status(httpStatus.OK).json({
            data: results
        })

    } catch (e) {
        return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
            message: e.message
        });
    }
}

articleController.getListArticles = async (req, res, next) => {
    try {
        var dateStr = new Date();
        dateStr.setDate(dateStr.getDate() - 1);
        dateStr.setHours(0,0,0,0);
        //const amount = req.params.amount;
        const listArticles = await ArticleModel.find({
            release_time: {$gte: dateStr}
        }).sort({release_time: -1})
        return res.status(httpStatus.OK).json({
            data: listArticles.slice(0, 5)
        })
    } catch (e) {
        return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
            message: e.message
        });
    }
}

articleController.getArticlesByCategory = async (req, res, next) => {
    try {
        const category = categoryConvert[req.params.category];
        const listArticles = await ArticleModel.find({
            category: category
        }).sort({release_time: -1})
        return res.status(httpStatus.OK).json({
            data: listArticles
        })
    } catch (e) {
        return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
            message: e.message
        });
    }
}

articleController.getArticle = async (req, res, next) => {
    try {
        const article = await ArticleModel.findById(req.params.id)
        return res.status(httpStatus.OK).json({
            data: article
        })
    } catch (e) {
        return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
            message: e.message
        });
    }
}

module.exports = articleController