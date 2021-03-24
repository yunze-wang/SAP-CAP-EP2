module.exports = function (srv){
  srv.after ('READ','Employee', each => {
    if(each.status == 'A'){
        each.status = 'Act';
    }
  })
}