
const products = [
    {
        id: "1",
        name: 'Notebook HP 348 G7',
        description : 'Descripcion HP',
        category: 'notebook',
        price: 60000,
        stock: 20,
        img: 'https://http2.mlstatic.com/D_NQ_NP_988167-MLA47049502877_082021-V.jpg'
    },

    {
        id: "2",
        name: 'Notebook Samsung ',
        description : 'Descripcion Samsung',
        category: 'notebook',
        price: 80000,
        stock: 20,
        img: 'https://www.muycomputer.com/wp-content/uploads/2021/01/Samsung_Notebook_Plus2_portada.jpg'
    },

    {
        id: "3",
        name: 'Notebook Lenovo ',
        description : 'Descripcion Lenovo',
        category: 'notebook',
        price: 70000,
        stock: 20,
        img: 'https://images.fravega.com/f300/4967b6139f77dc07a1035e9549ce1456.jpg'
    },

    {
        id: "4",
        name: 'Apple Macbook Air ',
        description : 'Descripcion Apple',
        category: 'notebook',
        price: 150000,
        stock: 20,
        img: 'https://http2.mlstatic.com/D_NQ_NP_801112-MLA46516512347_062021-V.jpg'
    },

    {
        id: "5",
        name: 'Notebook Asus',
        description : 'Descripcion Asus',
        category: 'notebook',
        price: 90000,
        stock: 20,
        img: 'https://http2.mlstatic.com/D_NQ_NP_742268-MLA48061903696_102021-O.jpg'
    }
]

const categories = [
    {
        
        id: 'notebooks', description: 'notebooks',
        
    }
]




export const getCategories = () => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(categories)
        }, 500)
    })
}

export const getProducts = (categoryId) => {
    return new Promise (resolve => {
        setTimeout(() => {
            resolve(categoryId ? products.filter(prod => prod.category === categoryId) : products)
        }, 500)
    })
}

export const getProductsById = (id) => {
    return new Promise (resolve => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === id))
        }, 3000)
    })
}