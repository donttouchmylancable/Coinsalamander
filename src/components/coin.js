class coin {
    constructor(id){
        this.id=id
        this.name=this.id;//just for now
        this.imgUrl=undefined
        this.symbol=undefined;
        this.priceEur=undefined;
        this.priceUsd=undefined
        this.volEur=undefined;
        this.volUsd=undefined;
        this.priceChange24h=undefined;
        this.athEur=undefined;
        this.athUsd=undefined;
        //this.update()
    }
    async update(){
        //let data=await fetch('https://api.coingecko.com/api/v3/coins/bitcoin',{mode: 'cors'})
        let data=await fetch(`https://api.coingecko.com/api/v3/coins/${this.id}`,{mode: 'cors'});
        let json=await data.json();
        
        //console.log(json)
        if (json!=undefined){
        this.imgUrl=json.image.large
        this.name=json.name;
        this.symbol=json.symbol;
        this.priceEur=json.market_data.current_price.eur;
        this.priceUsd=json.market_data.current_price.usd;
        this.volEur=json.market_data.total_volume.eur;
        this.volUsd=json.market_data.total_volume.usd;
        this.priceChange24h=json.market_data.price_change_percentage_24h;
        this.priceChange24h=json.market_data.price_change_percentage_24h;
        this.athEur=this.volUsd=json.market_data.ath.eur;
        this.athUsd=this.volUsd=json.market_data.ath.usd;}
    }
}
export default coin;