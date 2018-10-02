
const memberlist = function(req, res){
    res.render('members',{
        members:
            [
                {years:'1991-2017', member:'Ville Valo', instrument:'Vocals'},
                {years:'1991-2017', member:'Mikko (Mige) Paananen', instrument:'Bass'},
                {years:'1991-1992', member:'Sami (Juippi) Jokilehto', instrument:'Drums'},
                {years:'1993-1995', member:'Juha Tarvonen', instrument:'Drums'},
                {years:'1995-1998', member:'Juhana (Pätkä) Rantala', instrument:'Drums'},
                {years:'1996', member:'Oskari (Oki) Kymäläinen', instrument:'Guitar'},
                {years:'1996-2017', member:'Mikko (Linde) Lindström', instrument:'Guitar'} ,
                {years:'1996-1998', member:'Antto Melasniemi', instrument:'Keyboard'},
                {years:'1998-2000', member:'Jussi-Mikko (Juska) Salminen', instrument:'Keyboard'},
                {years:'1998-2015', member:'Mika (Kaasu) Karppinen', instrument:'Drums'},
                {years:'2001-2017', member:'Mikko (Burton) Puurtinen', instrument:'Keyboard'},
                {years:'2015-2017', member:'Jukka (Kosmo) Kröger', instrument:'Drums'}
            ]});
};
module.exports = {
    memberlist
};