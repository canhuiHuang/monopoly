import React,{useState} from 'react';

function Board({users, allProperties}) {
	const casillas = [
		{x:0,y:0},	// GO
		{x:-80,y:8},
		{x:-163,y:8},
		{x:-243,y:0},
		{x:-326,y:8},
		{x:-410,y:8},
		{x:-490,y:8},
		{x:-573,y:8},
		{x:-656,y:8},
		{x:-736,y:8},
		{x:-881,y:-26},		// Jail (Visiting)
		{x:-855,y:-107},
		{x:-840,y:-187},
		{x:-855,y:-270},
		{x:-855,y:-352},
		{x:-840,y:-433},
		{x:-855,y:-515},
		{x:-840,y:-595},
		{x:-855,y:-679},
		{x:-855,y:-762},
		{x:-840,y:-862},	// Free Parking
		{x:-736,y:-885},
		{x:-656,y:-885},
		{x:-573,y:-885},
		{x:-490,y:-885},
		{x:-410,y:-885},
		{x:-326,y:-885},
		{x:-243,y:-885},
		{x:-163,y:-885},
		{x:-80,y:-885},
		{x:28,y:-865},	// Go to jail
		{x:33,y:-762},
		{x:33,y:-679},
		{x:33,y:-595},
		{x:33,y:-515},
		{x:33,y:-433},
		{x:33,y:-352},
		{x:33,y:-270},
		{x:33,y:-187},
		{x:33,y:-107},
	]

	// DOM manipulation to zoom the board.
	let scale = 1;
    const zoom = (e) =>{
        console.log(e.deltaY);

        const table = document.querySelector('.table');
        if (e.deltaY < 0) {
            scale = scale + 0.03;
            table.style.transform = `scale(${scale})`;
        } else {
            scale = scale - 0.03;
            table.style.transform = `scale(${scale})`;
        }
    }
	//
	const renderPieces = () => {
		const pieces = [];
		let i = 0;
		// Get all positions

		const positionOccupied = thisUUID => {
			for (let uuid in users) {
				if (uuid != thisUUID) {
					if (users[uuid].position === users[thisUUID].position) {
						return true;
					}
				}
			}
			return false;
		}

		for(let uuid in users){
			pieces.push(
			<div key={i} className={`piece player-${users[uuid].turn}`} 
				style={{transform: `translate3D(${casillas[users[uuid].position].x + (positionOccupied(uuid)? i*4 : 0)}px,${casillas[users[uuid].position].y + (positionOccupied(uuid)? i*9 : 0)}px,0)`}}>
				<img src={users[uuid].piece_id} alt={users[uuid].name}/>
			</div>);
			i++
		}
		return pieces;
	}

    return (
<div className="table" onWheel={e=> {zoom(e)}}>
	<div className="board">
		<div className="pieces">
			{renderPieces()}
		</div>
		<div className="center">
			<div className="community-chest-deck">
				<h2 className="label">Community Chest</h2>
				<div className="deck"></div>
			</div>
			<h1 className="title">MONOPOLY</h1>
			<div className="chance-deck">
				<h2 className="label">Chance</h2>
				<div className="deck"></div>
			</div>
		</div>

		<div className="space corner go">
			<div className="container">
				<div className="instructions">Collect $200.00 salary as you pass</div>
				<div className="go-word">go</div>
			</div>
			<div className="arrow fa fa-long-arrow-left"></div>
		</div>

		<div className="row horizontal-row bottom-row">
			<div className="space property">
				<div className="container">
					<div className="color-bar light-blue"></div>
					<div className="name">{allProperties.altarDeReyes.data.property_name}</div>
					<img src={allProperties.altarDeReyes.image} alt="" className="image"/>
					<div className="price">PRICE ${allProperties.altarDeReyes.data.price}</div>
				</div>
			</div>
			<div className="space property">
				<div className="container">
					<div className="color-bar light-blue"></div>
					<div className="name">{allProperties.montanaZopilote.data.property_name}</div>
					<img src={allProperties.montanaZopilote.image} alt="" className="image"/>
					<div className="price">Price ${allProperties.montanaZopilote.data.price}</div>
				</div>
			</div>
			<div className="space chance">
				<div className="container">
					<div className="name">Chance</div>
					<i className="drawing fa fa-question"></i>
				</div>
			</div>
			<div className="space property">
				<div className="container">
					<div className="color-bar light-blue"></div>
					<div className="name">{allProperties.globoDelEquipoRocket.data.property_name}</div>
					<img src={allProperties.globoDelEquipoRocket.image} alt="" className="image"/>
					<div className="price">Price ${allProperties.globoDelEquipoRocket.data.price}</div>
				</div>
			</div>
			<div className="space railroad">
				<div className="container">
					<div className="name">{allProperties.glokmelkerPortal.data.property_name}</div>
					<img src={allProperties.glokmelkerPortal.image} alt="" className="image"/>
					<div className="price">Price ${allProperties.glokmelkerPortal.data.price}</div>
				</div>
			</div>
			<div className="space fee income-tax">
				<div className="container">
					<div className="name">Income Tax</div>
					<div className="diamond"></div>
					<div className="instructions">Pay 10% or $200</div>
				</div>
			</div>
			<div className="space property">
				<div className="container">
					<div className="color-bar dark-purple"></div>
					<div className="name">{allProperties.casaDeSteve.data.property_name}</div>
					<img src={allProperties.casaDeSteve.image} alt="" className="image"/>
					<div className="price">Price ${allProperties.casaDeSteve.data.price}</div>
				</div>
			</div>
			<div className="space community-chest">
				<div className="container">
					<div className="name">Community Chest</div>
					<i className="drawing fa fa-cube"></i>
					<div className="instructions">Follow instructions on top card</div>
				</div>
			</div>
			<div className="space property">
				<div className="container">
					<div className="color-bar dark-purple"></div>
					<div className="name">{allProperties.laCasaDeTuCorazon.data.property_name}</div>
					<img src={allProperties.laCasaDeTuCorazon.image} alt="" className="image"/>
					<div className="price">PRICE ${allProperties.laCasaDeTuCorazon.data.price}</div>
				</div>
			</div>
		</div>

		<div className="space corner jail">
			<div className="just">Just</div>
			<div className="drawing">
				<div className="container">
					<div className="name">In</div>
					<div className="window">
						<div className="bar"></div>
						<div className="bar"></div>
						<div className="bar"></div>
						<i className="person fa fa-frown-o"></i>
					</div>
					<div className="name">Jail</div>
				</div>
			</div>
			<div className="visiting">Visiting</div>
		</div>

		<div className="row vertical-row left-row">
			<div className="space property">
				<div className="container">
					<div className="color-bar orange"></div>
					<div className="name">{allProperties.forum.data.property_name}</div>
					<img src={allProperties.forum.image} alt="" className="image"/>
					<div className="price">PRICE ${allProperties.forum.data.price}</div>
				</div>
			</div>
			<div className="space property">
				<div className="container">
					<div className="color-bar orange"></div>
					<div className="name">{allProperties.lomita.data.property_name}</div>
					<img src={allProperties.lomita.image} alt="" className="image"/>
					<div className="price">PRICE ${allProperties.lomita.data.price}</div>
				</div>
			</div>
			<div className="space community-chest">
				<div className="container">
					<div className="name">Community Chest</div>
					<i className="drawing fa fa-cube"></i>
					<div className="instructions">Follow instructions on top card</div>
				</div>
			</div>
			<div className="space property">
				<div className="container">
					<div className="color-bar orange"></div>
					<div className="name">{allProperties.cityWok.data.property_name}</div>
					<img src={allProperties.cityWok.image} alt="" className="image"/>
					<div className="price">PRICE ${allProperties.cityWok.data.price}</div>
				</div>
			</div>
			<div className="space railroad">
				<div className="container">
					<div className="name">{allProperties.niflheimViggoPortal.data.property_name}</div>
					<img src={allProperties.niflheimViggoPortal.image} alt="" className="image"/>
					<div className="price">PRICE ${allProperties.niflheimViggoPortal.data.price}</div>
				</div>
			</div>
			<div className="space property">
				<div className="container">
					<div className="color-bar purple"></div>
					<div className="name">{allProperties.JYPEBuilding.data.property_name}</div>
					<img src={allProperties.JYPEBuilding.image} alt="" className="image"/>
					<div className="price">PRICE ${allProperties.JYPEBuilding.data.price}</div>
				</div>
			</div>
			<div className="space property">
				<div className="container">
					<div className="color-bar purple"></div>
					<div className="name">{allProperties.jardinBotanico.data.property_name}</div>
					<img src={allProperties.jardinBotanico.image} alt="" className="image"/>
					<div className="price">PRICE ${allProperties.jardinBotanico.data.price}</div>
				</div>
			</div>
			<div className="space utility electric-company">
				<div className="container">
					<div className="name">{allProperties.goldMine.data.property_name}</div>
					<img src={allProperties.goldMine.image} alt="" className="image"/>
					<div className="price">PRICE ${allProperties.goldMine.data.price}</div>
				</div>
			</div>
			<div className="space property">
				<div className="container">
					<div className="color-bar purple"></div>
					<div className="name">{allProperties.quirinoHouse.data.property_name}</div>
					<img src={allProperties.quirinoHouse.image} alt="" className="image"/>
					<div className="price">PRICE ${allProperties.quirinoHouse.data.price}</div>
				</div>
			</div>
		</div>

		<div className="space corner free-parking">
			<div className="container">
				<div className="name">Free</div>
				<i className="drawing fa fa-car"></i>
				<div className="name">Parking</div>
			</div>
		</div>

		<div className="row horizontal-row top-row">
			<div className="space property">
				<div className="container">
					<div className="color-bar red"></div>
					<div className="name">{allProperties.hotelCalifornia.data.property_name}</div>
					<img src={allProperties.hotelCalifornia.image} alt="" className="image"/>
					<div className="price">PRICE ${allProperties.hotelCalifornia.data.price}</div>
				</div>
			</div>
			<div className="space chance">
				<div className="container">
					<div className="name">Chance</div>
					<i className="drawing fa fa-question blue"></i>
				</div>
			</div>
			<div className="space property">
				<div className="container">
					<div className="color-bar red"></div>
					<div className="name">{allProperties.cheetosCorp.data.property_name}</div>
					<img src={allProperties.cheetosCorp.image} alt="" className="image"/>
					<div className="price">PRICE ${allProperties.cheetosCorp.data.price}</div>
				</div>
			</div>
			<div className="space property">
				<div className="container">
					<div className="color-bar red"></div>
					<div className="name">{allProperties.helloKittyCorp.data.property_name}</div>
					<img src={allProperties.helloKittyCorp.image} alt="" className="image"/>
					<div className="price">PRICE ${allProperties.helloKittyCorp.data.price}</div>
				</div>
			</div>
			<div className="space railroad">
				<div className="container">
					<div className="name">{allProperties.middlenwoodPortal.data.property_name}</div>
					<img src={allProperties.middlenwoodPortal.image} alt="" className="image"/>
					<div className="price">PRICE ${allProperties.middlenwoodPortal.data.price}</div>
				</div>
			</div>
			<div className="space property">
				<div className="container">
					<div className="color-bar yellow"></div>
					<div className="name">{allProperties.arizonaCorp.data.property_name}</div>
					<img src={allProperties.arizonaCorp.image} alt="" className="image"/>
					<div className="price">PRICE ${allProperties.arizonaCorp.data.price}</div>
				</div>
			</div>
			<div className="space property">
				<div className="container">
					<div className="color-bar yellow"></div>
					<div className="name">{allProperties.zpaticGamingHouse.data.property_name}</div>
					<img src={allProperties.zpaticGamingHouse.image} alt="" className="image"/>
					<div className="price">PRICE ${allProperties.zpaticGamingHouse.data.price}</div>
				</div>
			</div>
			<div className="space utility waterworks">
				<div className="container">
					<div className="name">{allProperties.cfe.data.property_name}</div>
					<img src={allProperties.cfe.image} alt="" className="image"/>
					<div className="price">PRICE ${allProperties.cfe.data.price}</div>
				</div>
			</div>
			<div className="space property">
				<div className="container">
					<div className="color-bar yellow"></div>
					<div className="name">{allProperties.jojoConvention.data.property_name}</div>
					<img src={allProperties.jojoConvention.image} alt="" className="image"/>
					<div className="price">PRICE ${allProperties.jojoConvention.data.price}</div>
				</div>
			</div>
		</div>

		<div className="space corner go-to-jail">
			<div className="container">
				<div className="name">Go To</div>
				<i className="drawing fa fa-gavel"></i>
				<div className="name">Jail</div>
			</div>
		</div>

		<div className="row vertical-row right-row">
			<div className="space property">
				<div className="container">
					<div className="color-bar green"></div>
					<div className="name">{allProperties.demaciaVice.data.property_name}</div>
					<img src={allProperties.demaciaVice.image} alt="" className="image"/>
					<div className="price">PRICE ${allProperties.demaciaVice.data.price}</div>
				</div>
			</div>
			<div className="space property">
				<div className="container">
					<div className="color-bar green"></div>
					<div className="name">{allProperties.bodegaAurrera.data.property_name}</div>
					<img src={allProperties.bodegaAurrera.image} alt="" className="image"/>
					<div className="price">PRICE ${allProperties.bodegaAurrera.data.price}</div>
				</div>
			</div>
			<div className="space community-chest">
				<div className="container">
					<div className="name">Community Chest</div>
					<i className="drawing fa fa-cube"></i>
					<div className="instructions">Follow instructions on top card</div>
				</div>
			</div>
			<div className="space property">
				<div className="container">
					<div className="color-bar green"></div>
					<div className="name">{allProperties.citadelOfRicks.data.property_name}</div>
					<img src={allProperties.citadelOfRicks.image} alt="" className="image"/>
					<div className="price">PRICE ${allProperties.citadelOfRicks.data.price}</div>
				</div>
			</div>
			<div className="space railroad">
				<div className="container">
					<div className="name">{allProperties.dunklerGartenPortal.data.property_name}</div>
					<img src={allProperties.dunklerGartenPortal.image} alt="" className="image"/>
					<div className="price">PRICE ${allProperties.dunklerGartenPortal.data.price}</div>
				</div>
			</div>
			<div className="space chance">
				<div className="container">
					<div className="name">Chance</div>
					<i className="drawing fa fa-question"></i>
				</div>
			</div>
			<div className="space property">
				<div className="container">
					<div className="color-bar dark-blue"></div>
					<div className="name">{allProperties.cinepolis.data.property_name}</div>
					<img src={allProperties.cinepolis.image} alt="" className="image"/>
					<div className="price">PRICE ${allProperties.cinepolis.data.price}</div>
				</div>
			</div>
			<div className="space fee luxury-tax">
				<div className="container">
					<div className="name">Luxury Tax</div>
					<div className="drawing fa fa-diamond"></div>
					<div className="instructions">Pay $75.00</div>
				</div>
			</div>
			<div className="space property">
				<div className="container">
					<div className="color-bar dark-blue"></div>
					<div className="name">{allProperties.appleStore.data.property_name}</div>
					<img src={allProperties.appleStore.image} alt="" className="image"/>
					<div className="price">PRICE ${allProperties.appleStore.data.price}</div>
				</div>
			</div>
		</div>
	</div>
</div>
    )
}

export default Board;
