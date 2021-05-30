
const views = document.querySelector('.views');
const slider = document.querySelector('.slider');
const pageviews = [10000, 50000, 100000, 500000, 1000000];
const cost = document.querySelector('.cost');
const priceRange = [8, 12, 16, 24, 36];
const toggle = document.querySelector('.toggle');
let yearlyBilling = document.querySelector('.yearly-billing');



const numFormatter = (num) => {
    if(num > 999 && num < 1000000){
        return (num/1000).toFixed(0) + 'K'; // convert to K for number from > 1000 < 1 million 
    }else if(num > 999999){
        return (num/1000000).toFixed(0) + 'M'; // convert to M for number from > 1 million 
    }else if(num < 900){
        return num; // if value < 1000, nothing to do
    }
}

const currencyFormatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  });


const app = () => {
    
    // Pageviews and Price range

    slider.addEventListener('input', (e) => {
      
        const sliderValue = e.target.value;

        switch (sliderValue) {
            case '0':
                views.innerHTML = numFormatter(pageviews[0]);
                cost.innerHTML = currencyFormatter.format(priceRange[0]);
                break;
            case '1':
                views.innerHTML = numFormatter(pageviews[1]);
                cost.innerHTML = currencyFormatter.format(priceRange[1]);
                break;
            case '2':
                views.innerHTML = numFormatter(pageviews[2]);
                cost.innerHTML = currencyFormatter.format(priceRange[2]);
                break;
            case '3':
                views.innerHTML = numFormatter(pageviews[3]);
                cost.innerHTML = currencyFormatter.format(priceRange[3]);
                break;
            default:
                views.innerHTML = numFormatter(pageviews[4]);
                cost.innerHTML = currencyFormatter.format(priceRange[4]);
        }
  
    });




    // Slider color changing for desktop:

    slider.addEventListener('mousemove', (e) => {
        const value = e.target.value;

        const color = 'linear-gradient(90deg, rgb(103, 243, 229)' + value * 25 + '%, rgb(235, 235, 255)' + value * 25 + '%)';

        slider.style.background = color;
    });

    // Slider color changing for touchscreen device:

    slider.addEventListener('touchmove', (e) => {
        const value = e.target.value;

        const color = 'linear-gradient(90deg, rgb(103, 243, 229)' + value * 25 + '%, rgb(235, 235, 255)' + value * 25 + '%)';

        slider.style.background = color;
    });


    // Toggle Yearly Billing Discount:

    toggle.addEventListener('click', () => {

        yearlyBilling.classList.toggle("toggle-discount");
    });









};

app();