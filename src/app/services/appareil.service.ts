export class AppareilService {
    appareils = [
        {
          name:"machine a laver",
          status: "allume"
        },
        {
          name:"television",
          status: "allume"
        },
        {
          name:"ordinateur",
          status: "eteint"
        }
      ];
    
    switchOnAll(){
        for(let appareil of this.appareils){
            appareil.status = 'allume';
        }
    }

    switchOffAll(){
        for(let appareil of this.appareils){
            appareil.status = 'eteint';
        }
    }

    switchOnOne(index:number){
        this.appareils[index].status = 'allume';
    }
    
    switchOffOne(index:number){
        this.appareils[index].status = 'eteint';
    }
}