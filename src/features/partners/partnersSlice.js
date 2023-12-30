import { PARTNERS } from '../../App/shared/PARTNERS';

export const selectFeaturedPartner = () => {
    return PARTNERS.find(partner => partner.featured);
};

// you are on task 3 (displaylist.js)