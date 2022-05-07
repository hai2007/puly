import xhtml from '@hai2007/browser/xhtml';

export default {
    inserted: (el) => {

        el.setAttribute('open', 'no');
        xhtml.bind(el, 'click', event => {
            el.setAttribute('open', el.getAttribute('open') == 'yes' ? 'no' : 'yes');
        });

    }
};
