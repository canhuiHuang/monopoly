const usersToUpdate = {};
            
            const propertiesToUpdate = {};
            propertiesToUpdate['laCasaDeTuCorazon'] = {name: 'laCasaDeTuCorazon', newOwner: this.props.myUUID, newHousesNumber: 1}
            propertiesToUpdate['casaDeSteve'] = {name: 'casaDeSteve', newOwner: this.props.myUUID, newHousesNumber: 2}
            propertiesToUpdate['glokmelkerPortal'] = {name: 'glokmelkerPortal', newOwner: this.props.myUUID, newHousesNumber: 3}
            propertiesToUpdate['globoDelEquipoRocket'] = {name: 'globoDelEquipoRocket', newOwner: this.props.myUUID, newHousesNumber: 4}
            propertiesToUpdate['montanaZopilote'] = {name: 'montanaZopilote', newOwner: this.props.myUUID, newHousesNumber: 5}
            propertiesToUpdate['altarDeReyes'] = {name: 'altarDeReyes', newOwner: this.props.myUUID, newHousesNumber: 4}

            propertiesToUpdate['quirinoHouse'] = {name: 'quirinoHouse', newOwner: this.props.myUUID, newHousesNumber: 4}
            propertiesToUpdate['goldMine'] = {name: 'goldMine', newOwner: this.props.myUUID, newHousesNumber: 2}
            propertiesToUpdate['jardinBotanico'] = {name: 'jardinBotanico', newOwner: this.props.myUUID, newHousesNumber: 5}
            propertiesToUpdate['JYPEBuilding'] = {name: 'JYPEBuilding', newOwner: this.props.myUUID, newHousesNumber: 3}
            propertiesToUpdate['niflheimViggoPortal'] = {name: 'niflheimViggoPortal', newOwner: this.props.myUUID, newHousesNumber: 3}
            propertiesToUpdate['cityWok'] = {name: 'cityWok', newOwner: this.props.myUUID, newHousesNumber: 5}
            propertiesToUpdate['lomita'] = {name: 'lomita', newOwner: this.props.myUUID, newHousesNumber: 3}
            propertiesToUpdate['forum'] = {name: 'forum', newOwner: this.props.myUUID, newHousesNumber: 4}

            usersToUpdate[this.props.myUUID] = {newPropertyName: 'casaDeSteve'};

            this.props.pubnub.publish({
                message: {
                    users: usersToUpdate,
                    updateProperties: propertiesToUpdate,
                    broadcast_message: `testing.`
                },
                channel: this.props.gameChannel
            });

            usersToUpdate[this.props.myUUID] = {newPropertyName: 'laCasaDeTuCorazon'};
            this.props.pubnub.publish({
                message: {
                    users: usersToUpdate,
                    broadcast_message: `testing2.`
                },
                channel: this.props.gameChannel
            });
            usersToUpdate[this.props.myUUID] = {newPropertyName: 'glokmelkerPortal'};
            this.props.pubnub.publish({
                message: {
                    users: usersToUpdate,
                    broadcast_message: `testing2.`
                },
                channel: this.props.gameChannel
            });
            usersToUpdate[this.props.myUUID] = {newPropertyName: 'globoDelEquipoRocket'};
            this.props.pubnub.publish({
                message: {
                    users: usersToUpdate,
                    broadcast_message: `testing2.`
                },
                channel: this.props.gameChannel
            });
            usersToUpdate[this.props.myUUID] = {newPropertyName: 'montanaZopilote'};
            this.props.pubnub.publish({
                message: {
                    users: usersToUpdate,
                    broadcast_message: `testing2.`
                },
                channel: this.props.gameChannel
            });
            usersToUpdate[this.props.myUUID] = {newPropertyName: 'altarDeReyes'};
            this.props.pubnub.publish({
                message: {
                    users: usersToUpdate,
                    broadcast_message: `testing2.`
                },
                channel: this.props.gameChannel
            });

            usersToUpdate[this.props.myUUID] = {newPropertyName: 'quirinoHouse'};
            this.props.pubnub.publish({
                message: {
                    users: usersToUpdate,
                    broadcast_message: `testing2.`
                },
                channel: this.props.gameChannel
            });
            usersToUpdate[this.props.myUUID] = {newPropertyName: 'goldMine'};
            this.props.pubnub.publish({
                message: {
                    users: usersToUpdate,
                    broadcast_message: `testing2.`
                },
                channel: this.props.gameChannel
            });
            usersToUpdate[this.props.myUUID] = {newPropertyName: 'jardinBotanico'};
            this.props.pubnub.publish({
                message: {
                    users: usersToUpdate,
                    broadcast_message: `testing2.`
                },
                channel: this.props.gameChannel
            });
            usersToUpdate[this.props.myUUID] = {newPropertyName: 'JYPEBuilding'};
            this.props.pubnub.publish({
                message: {
                    users: usersToUpdate,
                    broadcast_message: `testing2.`
                },
                channel: this.props.gameChannel
            });
            usersToUpdate[this.props.myUUID] = {newPropertyName: 'niflheimViggoPortal'};
            this.props.pubnub.publish({
                message: {
                    users: usersToUpdate,
                    broadcast_message: `testing2.`
                },
                channel: this.props.gameChannel
            });
            usersToUpdate[this.props.myUUID] = {newPropertyName: 'cityWok'};
            this.props.pubnub.publish({
                message: {
                    users: usersToUpdate,
                    broadcast_message: `testing2.`
                },
                channel: this.props.gameChannel
            });
            usersToUpdate[this.props.myUUID] = {newPropertyName: 'lomita'};
            this.props.pubnub.publish({
                message: {
                    users: usersToUpdate,
                    broadcast_message: `testing2.`
                },
                channel: this.props.gameChannel
            });
            usersToUpdate[this.props.myUUID] = {newPropertyName: 'forum'};
            this.props.pubnub.publish({
                message: {
                    users: usersToUpdate,
                    broadcast_message: `testing2.`
                },
                channel: this.props.gameChannel
            });