module.exports={
  getExample(req, res){
    console.log('você também pode utilizar o console para visualizar =)');
    res.send('Request getExample feita');
  },
  
  getOtherExample (req, res) {
    console.log('outro console =)');
    res.send('Request getOtherExample feita');
  },
}