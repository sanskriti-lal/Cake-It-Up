document.addEventListener('DOMContentLoaded', () => {
    const tour = new Shepherd.Tour({
        useModalOverlay: true,
        defaultStepOptions: {
            scrollTo: { behavior: 'smooth', block: 'center' }
        }
    });

    tour.addStep({
        title: 'Welcome',
        text: 'Welcome to Cake It Up Click "Next" to start the tour.',
        attachTo: { element: '#featured-link', on: 'bottom' },
        buttons: [
            {
                text: 'Next',
                action: tour.next
            }
        ]
    });

    tour.addStep({
        title: 'Menu',
        text: 'These are our speciality. Have a look at our top picks!',
        attachTo: { element: '#featured', on: 'bottom' },
        buttons: [
            {
                text: 'Back',
                action: tour.back
            },
            {
                text: 'Next',
                action: tour.next
            }
        ]
    });

    tour.addStep({
        title: 'Contact us',
        // text: 'Browse products by categories to find what you need.',
        attachTo: { element: '#categories', on: 'bottom' },
        buttons: [
            {
                text: 'Back',
                action: tour.back
            },
            {
                text: 'Next',
                action: tour.next
            }
        ]
    });

  
  
    document.getElementById('start-tour').addEventListener('click', () => {
        tour.start();
    });
});
