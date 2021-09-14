export class AppareilService {
    appareils = [
        {
          id:1,
          name:"machine a laver",
          status: "allume"
        },
        {
          id:2,
          name:"television",
          status: "allume"
        },
        {
          id:3,
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

    getAppareilById(id:number){
      const appareil = this.appareils.find(
        (appareilObject) => {
          return appareilObject.id === id;
        }
      );
      return appareil;
    }
}