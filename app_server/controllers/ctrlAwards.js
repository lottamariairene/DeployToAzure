
const awardlist = function(req, res){
    res.render('awards',{
        awards:
        [
            {year:'1997', nominee:'HIM', award:'Newcomer of the Year'},
            {year:'1997', nominee:'Greatest Lovesongs Vol. 666', award:'Debut Album of the Year'},
            {year:'1999', nominee:'HIM', award:'Export of the Year'},
            {year:'2000', nominee:'HIM', award:'Band of the Year'},
            {year:'2000', nominee:'Razorblade Romance', award:'Album of the Year'},
            {year:'2000', nominee:'HIM', award:'Viewers Choice Award'},
            {year:'2000', nominee:'Join Me in Death', award:'Video of the Year'},
            {year:'2001', nominee:'HIM', award:'Export of the Year'},
            {year:'2001', nominee:'HIM', award:'Viewers Choice Award'},
            {year:'2004', nominee:'The Funeral of Hearts', award:'Best Video'},
            {year:'2004', nominee:'Razorblade Romance', award:'IFPI Platinum Europe Award'},
            {year:'2005', nominee:'Dark Light', award:'Rock Album of the Year'},
            {year:'2005', nominee:'Wings of a Butterfly', award:'Song of the Year'},
            {year:'2013', nominee:'HIM', award:'Most Dedicated Fans'},
            {year:'2014', nominee:'Into the Night', award:'Video of the Year'}
        ]});
};

module.exports = {
    awardlist
};