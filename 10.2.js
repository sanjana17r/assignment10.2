class airplane //class named airplane is created
{
    constructor(n,o,s) //name,occupance,speed can be passed as parameters to the constructor
    {                   //here n represents name,o represents occupancy,s represents speed.
        this.name=n;
        this.occupancy=o;
        this.speed=s;
    }
    get Name()         //......getters and setters used, to validate name.........
    {
        return this.name;
    }
    set Name(value)
    {
        if(value==undefined||value=='')
        {
           throw new Error('name cannot be undefined');
        }
        this.name=value;
    }
    get Occupancy()     //.........getters and setters used, to validate occupancy........
    {
        return this.occupancy;
    }
    set Occupancy(value2)
    {
        if(value2==undefined||value2==''||(value2<0)||(value2>180))
        {
            throw new Error('please enter a proper occupancy');
        }
        this.occupancy=value2;
    }
    get Speed()        //.........getters and setters used, to validate speed........
    {
        return airplane.name;
    }
    set Speed(value3)
    {
        if(value3==undefined||value3==''||(value3<0)||(value3>900))
        {
           throw new Error('Invalid Speed');
        }
        airplane.speed=value3;
    }
    status()  //method called status for printing the current status of the airplane 
    {
        console.log('airplane: '+this.name+ ' with occupancy '+this.occupancy+' and is moving with speed: '+this.speed);
    }
    increaseSpeed(n) //method to increase speed of the airplane objects
    {
        this.speed+=n;
    }
    decreaseSpeed(n1) //method to decrease speed of the airplane objects.
    {
        this.speed-=n1;
    }
}   
var airplane1=new airplane('jumbo',256,500); //three airplane objects are created
var airplane2=new airplane('mini jumbo',300,600);
var airplane3=new airplane('maxi jumbo',200,400);
function Printstatus() //this function is used to print status' of the airplane objects.
{
    airplane1.status();
    airplane2.status();
    airplane3.status();
}

function IncreaseSpeed() //this function is for increasing the speed of each of the objects by repective amount. 
{
    airplane1.increaseSpeed(200);
    airplane2.increaseSpeed(200);
    airplane3.increaseSpeed(200);
}
function DecreaseSpeed()  //this function is for decreasing the speed of each of the objects by repective parameters.
{
    airplane1.decreaseSpeed(10);
    airplane2.decreaseSpeed(20);
    airplane3.decreaseSpeed(15);
}
Printstatus();//this function is called,it prints the status of each of the airplane objects 
IncreaseSpeed();//this function when called increases the speed of the airplane objects by the given amount.
console.log('......after increasing speed by 200.....');
Printstatus();//status is printed, after the speed is increased by 200 as given in the assignment.


