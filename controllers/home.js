module.exports = {
    getIndex: (req,res)=>{
        res.render('index.ejs')
    },
    getAbout: (req,res)=>{
        res.render('about.ejs')
    },
    getForgot: (req,res)=>{
        res.render('forgot.ejs')
    },
    getOtherproducts: (req,res)=>{
        res.render('otherproducts.ejs')
    },
}
