import React, { Component } from 'react';
import AutoComplete from 'material-ui/AutoComplete';
import MenuItem from 'material-ui/MenuItem';

class AutoCompleteExp extends Component {
    constructor(props) {
        super(props)
        this.state = {
            Colors: [
                'Red',
                'Orange',
                'Yellow',
                'Green',
                'Blue',
                'Purple',
                'Black',
                'White',
            ],              
            Data: [],
            Source2: [
                {
                    text: 'Manh',
                    value: (
                        <MenuItem
                            primaryText="Manh"
                            secondaryText="&#9786;"
                        />
                    )
                },
                {
                    text: 'Tuan',
                    value: (
                        <MenuItem
                            primaryText="Tuan"
                            secondaryText="&#9786;"
                        />
                    )
                }
            ],
            Source3:[
                {
                    text:'One',
                    value:1
                },
                {
                    text:'Two',
                    value:2
                },
                {
                    text:'Three',
                    value:3
                }
            ],
            Fruits: [
                'Apple', 'Apricot', 'Avocado',
                'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry',
                'Boysenberry', 'Blood Orange',
                'Cantaloupe', 'Currant', 'Cherry', 'Cherimoya', 'Cloudberry',
                'Coconut', 'Cranberry', 'Clementine',
                'Damson', 'Date', 'Dragonfruit', 'Durian',
                'Elderberry',
                'Feijoa', 'Fig',
                'Goji berry', 'Gooseberry', 'Grape', 'Grapefruit', 'Guava',
                'Honeydew', 'Huckleberry',
                'Jabouticaba', 'Jackfruit', 'Jambul', 'Jujube', 'Juniper berry',
                'Kiwi fruit', 'Kumquat',
                'Lemon', 'Lime', 'Loquat', 'Lychee',
                'Nectarine',
                'Mango', 'Marion berry', 'Melon', 'Miracle fruit', 'Mulberry', 'Mandarine',
                'Olive', 'Orange',
                'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Physalis', 'Plum', 'Pineapple',
                'Pumpkin', 'Pomegranate', 'Pomelo', 'Purple Mangosteen',
                'Quince',
                'Raspberry', 'Raisin', 'Rambutan', 'Redcurrant',
                'Salal berry', 'Satsuma', 'Star fruit', 'Strawberry', 'Squash', 'Salmonberry',
                'Tamarillo', 'Tamarind', 'Tomato', 'Tangerine',
                'Ugli fruit',
                'Watermelon',
              ]
        }
    }

    onUpdateInput = (val) => {
        const Data = [];
        for (let i = 0; i < 10; i++) {
            Data.push(val + i);
        }
        this.setState({ Data })
    }

    render() {
        const {Data,Source2,Source3,Colors,Fruits} = this.state;

        const menuProps = {
            desktop:true,
            disableAutoFocus:true
        }

        return <div>
            <AutoComplete hintText="Type anything here" dataSource={Data}
                onUpdateInput={this.onUpdateInput} />
            <AutoComplete hintText="Type a name" filter={AutoComplete.noFilter} dataSource={Source2}/>
            <AutoComplete hintText="Type a number" 
            openOnFocus dataSource={Source3}/>
            <br/>
            <AutoComplete hintText="Case sensitive filter" dataSource={Colors}/>
            <br/>
            <AutoComplete hintText="Case insensitive filter" filter={AutoComplete.caseInsensitiveFilter} dataSource={Colors}/>
            <br/>
            <AutoComplete hintText="Fuzzy filter" maxSearchResults={5}  filter={AutoComplete.fuzzyFilter} dataSource={Fruits}/>
            <br/>
            <AutoComplete hintText="Type Color - MenuProp" dataSource={Colors} menuProps={menuProps}/>
        </div>
    }
}

export default AutoCompleteExp