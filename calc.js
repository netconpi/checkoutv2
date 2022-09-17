
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

class PageDrawer {

    // Just contains elements to be displayed 
    constructor() {

        this.windows = {
            0: {
                'name': 'Одностворчатое окно',
                'price': {
                    'all': 300,
                    'after_rec': 350,
                },
                'dementions': 'окно', 
                'exclude_clen_types': [],
            },
            1: {
                'name': 'Двухстворчатое окно',
                'price': {
                    'all': 600,
                    'after_rec': 700,
                },
                'dementions': 'окно', 
                'exclude_clen_types': [],
            },
            2: {
                'name': 'Трёхстворчатое окно',
                'price': {
                    'all': 900,
                    'after_rec': 1050,
                },
                'dementions': 'окно', 
                'exclude_clen_types': [],
            },
            3: {
                'name': 'Мойка лоджий и балконов',
                'price': {
                    'all': 2400,
                    'after_rec': 2800,
                },
                'dementions': 'окно', 
                'exclude_clen_types': [],
            },
            4: {
                'name': 'Мойка оконного блока',
                'price': {
                    'all': 1400,
                    'after_rec': 1400,
                },
                'dementions': 'окно', 
                'exclude_clen_types': [],
            },
            5: {
                'name': 'Балконное остекление',
                'price': {
                    'all': 700,
                    'after_rec': 700,
                },
                'dementions': 'окно', 
                'exclude_clen_types': [],
            },
        }

        this.furniture = {
            0: {
                'name': 'Диван 2 посадочных мест',
                'price': {
                    'all': 2600,
                },
                'dementions': 'диван', 
                'exclude_clen_types': [],
            },
            1: {
                'name': 'Диван 3 посадочных мест',
                'price': {
                    'all': 3600,
                },
                'dementions': 'диван', 
                'exclude_clen_types': [],
            },
            2: {
                'name': 'Диван 4 посадочных мест',
                'price': {
                    'all': 4800,
                },
                'dementions': 'диван', 
                'exclude_clen_types': [],
            },
            3: {
                'name': 'Диван 5 посадочных мест',
                'price': {
                    'all': 5600,
                },
                'dementions': 'диван', 
                'exclude_clen_types': [],
            },
            4: {
                'name': 'Стул',
                'price': {
                    'all': 500,
                },
                'dementions': 'стул', 
                'exclude_clen_types': [],
            },
            5: {
                'name': 'Кресло',
                'price': {
                    'all': 1000,
                },
                'dementions': 'окно', 
                'exclude_clen_types': [],
            },
            6: {
                'name': 'Пуф',
                'price': {
                    'all': 1200,
                },
                'dementions': 'окно', 
                'exclude_clen_types': [],
            },
            7: {
                'name': 'Диванная подушка большая',
                'price': {
                    'all': 500,
                },
                'dementions': 'подушка', 
                'exclude_clen_types': [],
            },
            8: {
                'name': 'Диванная подушка малая',
                'price': {
                    'all': 200,
                },
                'dementions': 'подушка', 
                'exclude_clen_types': [],
            },
            9: {
                'name': 'Ковер синтетический',
                'price': {
                    'all': 200,
                },
                'dementions': 'м', 
                'exclude_clen_types': [],
            },
            10: {
                'name': 'Ковер натуральный',
                'price': {
                    'all': 250,
                },
                'dementions': 'м', 
                'exclude_clen_types': [],
            },
            11: {
                'name': 'Ковролин',
                'price': {
                    'all': 20,
                },
                'dementions': 'м', 
                'exclude_clen_types': [],
            },
        }

        this.additional = {
            0: {
                'name': 'Шторы',
                'price': {
                    'all': 500,
                },
                'dementions': 'шт', 
                'exclude_clen_types': [],
            },
            1: {
                'name': 'Глажка',
                'price': {
                    'all': 800,
                },
                'dementions': 'час', 
                'exclude_clen_types': [],
            },
            2: {
                'name': 'Душевая кабина/Джакузи',
                'price': {
                    'all': 800,
                },
                'dementions': 'шт', 
                'exclude_clen_types': [],
            },
            3: {
                'name': 'Осветительные приборы',
                'price': {
                    'all': 500,
                },
                'dementions': 'шт', 
                'exclude_clen_types': [],
            },
            4: {
                'name': 'Холодильник',
                'price': {
                    'all': 800,
                },
                'dementions': 'шт', 
                'exclude_clen_types': [],
            },
            5: {
                'name': 'Микроволновая печь',
                'price': {
                    'all': 500,
                },
                'dementions': 'шт', 
                'exclude_clen_types': [],
            },
            6: {
                'name': 'Духовой шкаф',
                'price': {
                    'all': 500,
                },
                'dementions': 'шт', 
                'exclude_clen_types': [],
            },
        }

        this.delivery = {
            0: {
                'name': 'Доставка вышки-туры',
                'price': {
                    'all': 5000,
                },
                'dementions': '1 ед.', 
                'exclude_clen_types': [],
            },
            1: {
                'name': 'Доставка пылесоса',
                'price': {
                    'all': 500,
                },
                'dementions': '1 ед.', 
                'exclude_clen_types': [],
            },
            2: {
                'name': 'Доставка стремянки',
                'price': {
                    'all': 800,
                },
                'dementions': '1 ед.', 
                'exclude_clen_types': [],
            },
        }

        this.win_len = 6;
        this.fun_len = 12;
        this.add_len = 7;
        this.delivery_len = 3;
    };

    // Main block generation control. 
    // Pass important parametrs to create_block()
    // And generate block and display it
    block(block_id, generate = 'windows', clean_type = 'all') {

        // Create wrapper 
        let items_wrapper = document.createElement("div");
        items_wrapper.classList.add('block_positions');
        items_wrapper.setAttribute('id', `${block_id}`)

        // Create block title
        let text = document.createElement('p');
        text.classList.add('bp_description');

        // Define
        if (generate == 'windows') {
            text.insertAdjacentText('afterbegin', 'Мытье окон');
            items_wrapper.appendChild(text);
            items_wrapper = this.create_blocks(
                items_wrapper, 
                this.windows, 
                this.win_len, 
                'windows',
                clean_type,
            );
        } else if (generate == 'furniture') {
            text.insertAdjacentText('afterbegin', 'Химчитска мебели');
            items_wrapper.appendChild(text);
            items_wrapper = this.create_blocks(
                items_wrapper, 
                this.furniture, 
                this.fun_len, 
                'furniture',
                clean_type,
            );
        } else if (generate == 'additional') {
            text.insertAdjacentText('afterbegin', 'Дополнительные услуги');
            items_wrapper.appendChild(text);
            items_wrapper = this.create_blocks(
                items_wrapper, 
                this.additional, 
                this.add_len, 
                'additional',
                clean_type,
            );
        } else if (generate == 'delivery') {
            text.insertAdjacentText('afterbegin', 'Доставка оборудования');
            items_wrapper.appendChild(text);
            items_wrapper = this.create_blocks(
                items_wrapper, 
                this.delivery, 
                this.delivery_len, 
                'delivey',
                clean_type,
            );
        }

        // Final insert to content box
        let to_insert = document.getElementById('content_wrapper');
        to_insert.append(items_wrapper);
    };

    // Method that creates elements in block
    create_blocks(parent_node, input_dict, dict_len, typee, clean_type = 'all') {
        // Create blocks 
        for (let item = 0; item < dict_len; item++) {
            let block = document.createElement("div");
            block.classList.add('bp_element');
            block.setAttribute('id', `element_${typee}_${item}`);

            let name = input_dict[item]['name'];
            let price;
            if (input_dict[item]['price'].hasOwnProperty(clean_type)) {
                price = input_dict[item]['price'][clean_type];
            } else {
                price = input_dict[item]['price']['all'];
            }

            if (!(input_dict[item]['exclude_clen_types'].includes(clean_type))) {
                block.insertAdjacentHTML(
                    'afterbegin', 
                    `<p class="bp_element_name">
                        ${name}
                    </p>
                    <p class="bp_element_price">
                        ${price}₽/${input_dict[item]['dementions']}
                    </p>
                    <div class="bp_element_ctrl">
                        <img src="/minus.svg" class="bp_elem_remove" onclick="update('min', '${typee}_${item}')">
                        <p class="bp_elem_amount" id="${typee}_${item}">0</p>
                        <img src="/plus.svg" class="bp_elem_add" onclick="update('add', '${typee}_${item}')">
                    </div>
                `);
                parent_node.appendChild(block);
            }

        };

        return parent_node;
    }

}

class Logic extends PageDrawer {

    calculator() {

        this.space_type = document.querySelector('#space_type');
        this.clean_type = document.querySelector('#clean_type');
        this.floor_area = document.querySelector('#place_sqrs');
        this.from_moscow = document.querySelector('#mkad_distance');

        this.displayed_cards = [];

        this.price = 0;
        this.min_price = 2800;

        if (space_type.value != 'office' && space_type.value != 'commer_space') {
            this.displayed_cards.push(`windows_${getRandomInt(100)}`);
            this.displayed_cards.push(`furniture_${getRandomInt(100)}`);
            this.displayed_cards.push(`additional_${getRandomInt(100)}`);
            this.displayed_cards.push(`delivery_${getRandomInt(100)}`);

            this.block(this.displayed_cards[0], 'windows', this.clean_type.value);
            this.block(this.displayed_cards[1], 'furniture', this.clean_type.value);
            this.block(this.displayed_cards[2], 'additional', this.clean_type.value);
            this.block(this.displayed_cards[3], 'delivery', this.clean_type.value);
        }

        this.selected_products = [];

    };

    change(curr_amount, element_id) {

        if (curr_amount == 0) {
            var index = this.selected_products.indexOf(element_id);
            if (index !== -1) {
                this.selected_products.splice(index, 1);
            }
        } else {
            if (!(this.selected_products.includes(element_id))) {
                this.selected_products.push(element_id);
            };
        }

    };

    main_parametrs_change (change_id) {

        if (change_id == 'clean_type') {

            for (let item = 0; item < this.displayed_cards.length; item++) {
                let block = document.getElementById(this.displayed_cards[item]);
                
                try {
                    block.remove();
                } catch (TypeError) {
                    console.log('already removed');
                }
            };

            if (!(this.clean_type.value == 'vip' || this.clean_type.value == 'contract')) {
                this.block(this.displayed_cards[0], 'windows', this.clean_type.value);
                this.block(this.displayed_cards[1], 'furniture', this.clean_type.value);
                this.block(this.displayed_cards[2], 'additional', this.clean_type.value);
                this.block(this.displayed_cards[3], 'delivery', this.clean_type.value);
            } else {
                console.log('vip clean')
            };

        } else if (change_id == 'space_type') {
            let element = document.getElementById('change_it_clean');
            if (this.space_type.value == 'office' || this.space_type.value == 'commer_space') {
                element.setAttribute('value', 'contract');
                element.innerText = "Контракт";
            } else {
                element.setAttribute('value', 'vip');
                element.innerText = "VIP-Уборка";
            }
        }


    }

    checkout() {
        let price = 0;
    };

}

// Init work
let calc = new Logic;
calc.calculator();

// Update values by click on plus/minus. Separeted, call from HTML
function update(action, element_id) {

    let elem_dom = document.getElementById(element_id);
    let curr_amount = parseInt(elem_dom.innerText);
    if (action == 'add') {
        if (curr_amount < 99) {
            elem_dom.innerText = curr_amount + 1;
            curr_amount += 1;
        }
    } else if (action == 'min') {
        if (curr_amount > 0) {
            elem_dom.innerText = curr_amount - 1;
            curr_amount -= 1;
        }
    }

    calc.change(curr_amount, element_id)
}

function main_params_change(changed_id) {
    calc.main_parametrs_change(changed_id);
}

