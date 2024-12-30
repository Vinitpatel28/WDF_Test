const monthlyBtn = document.getElementById('monthly-btn');
const yearlyBtn = document.getElementById('yearly-btn');
const monthlyPrice = document.querySelectorAll('.monthly-price');
const yearlyPrice = document.querySelectorAll('.yearly-price');
const monthlyPlan = document.querySelector('.monthly-plan');
const yearlyPlan = document.querySelector('.yearly-plan');

monthlyBtn.addEventListener('click', function() {
    monthlyBtn.classList.add('active');
    yearlyBtn.classList.remove('active');
    
    monthlyPrice.forEach(price => price.style.display = 'inline');
    yearlyPrice.forEach(price => price.style.display = 'none');
    
    monthlyPlan.style.display = 'block';
    yearlyPlan.style.display = 'none';
});

yearlyBtn.addEventListener('click', function() {
  
    yearlyBtn.classList.add('active');
    monthlyBtn.classList.remove('active');
    yearlyPrice.forEach(price => price.style.display = 'inline');
    monthlyPrice.forEach(price => price.style.display = 'none');
    
    yearlyPlan.style.display = 'block';
    monthlyPlan.style.display = 'none';
});

monthlyBtn.classList.add('active');
monthlyPrice.forEach(price => price.style.display = 'inline');
yearlyPrice.forEach(price => price.style.display = 'none');
monthlyPlan.style.display = 'block';
yearlyPlan.style.display = 'none';
