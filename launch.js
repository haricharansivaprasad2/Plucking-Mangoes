class launch{
    constructor(BodyA,pointA){
        var options ={
            BodyA: BodyA,
            pointA: pointA,
            stiffness: 0.03,
            lenght: 12
        }
        this.pointA = pointA;
        this.Launcher = Constraint.create(options);
        World.add(world,this.launcher);
    }

    fly(){
        this.Launcher.BodyA = null; 
    }

    attach(object){
        this.Launcher.BodyA = object;
    }

    display(){
        var start = this.pointA;

        var end = this.BodyA.position;

        line(start.x,start.y,end.x,end.y);

    }
}