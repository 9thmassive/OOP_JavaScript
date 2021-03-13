class Car{
 constructor(speed,horsPower){
  this.speed = speed
  this.horsPower = horsPower 
 }
 
 speedTo100(){
  	return this.speed/this.horsPower
 }

}
class BMW extends Car{
	speedTo100(){
  	return   super.speedTo100()+'Good Restul'
  }
}

let BMW_X5 = new BMW(100,400)
alert(BMW_X5.speedTo100())

//From a parameter or where it calls from, can return different values
