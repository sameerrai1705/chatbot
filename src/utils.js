
export const analyze = (text) => {
    if(text.includes('hi') || text.includes('hey') || text.includes('hello')) return 'Good day to you sir , how can i help you?'
    else if(text.includes('order')) return 'What you like to order? 1.Pizza, 2.Burgers, 3.Sandwich, 4.Roll'
    else if(text.includes('update order')) return 'Please update your order 1.Pizza, 2.Burgers, 3.Sandwich, 4.Roll'
    else if(text.includes('thank')) return 'Thanks for ordering food'
    else if(text.includes('pizza')) return '1.Paneer, 2.Onion , 3.Non Veg Loaded , 4.Veg Loaded , 5.Margherita , 6.Tomato'
    else if(text.includes('burger')) return '1.Mcaloo Tikki Burger , 2. Filet o Fish , 3. Chicken Mcgrill , 4.Chicken Maharaja'
    else if(text.includes('roll')) return '1.Egg Roll , 2.Chicken Roll'
    else if(text.includes('sandwich') || text.includes('paneer') || text.includes('onion') || text.includes('non veg loaded') || text.includes('veg loaded') || text.includes('margherita') || text.includes('tomato') || text.includes('mcaloo tikki') || text.includes('filet o fish') || text.includes('chicken mcgrill') ||text.includes('chicken maharaja') ||text.includes('egg') || text.includes('chicken')) return 'Ok'
    else return "I can't get you. Can you please rephrase the message"
}