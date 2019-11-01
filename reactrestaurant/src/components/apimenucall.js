import React from 'react';
import Axios from 'axios';
class ApiMenuCall extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            menu_items: []
        };
    }



    apicallMenuItems() {

        Axios.get(`https://entree-f18.herokuapp.com/v1/menu/12`)
            .then((Response) => {
                let menu_items = Response.data.menu_items;

                menu_items.map((item, idx) => {

                    item.price = `$` + item.description.length;
                    item.title = item.description.split(' ')[1].toUpperCase();
                });

                localStorage.setItem('menuItemsKey' ,JSON.stringify(menu_items));

                this.setState({
                    menu_items: menu_items
                });

            });
    }


    componentWillMount() {
        if (!localStorage.getItem('menu_items')) {
            this.apicallMenuItems();
        } else {
            //localstorage get json 
            this.setState({
            })
        }
    }

    render() {
        return (
            this.state.menu_items.map((item, idx) => {
                return (
                    <React.Fragment>
                        <div class="col text-center">
                            <h6>{item.title}</h6>
                            <p>{item.description}</p>
                            <p>{item.price}</p>
                        </div>
                    </React.Fragment>
                );
            })
        )
    }
}

export default ApiMenuCall;