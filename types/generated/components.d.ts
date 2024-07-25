import type { Schema, Attribute } from '@strapi/strapi';

export interface SeoMetaData extends Schema.Component {
  collectionName: 'components_seo_meta_data';
  info: {
    displayName: 'meta-data';
  };
  attributes: {
    metaTitle: Attribute.String;
    metaDescription: Attribute.Text;
    image: Attribute.Media<'images'>;
  };
}

export interface PageSeo extends Schema.Component {
  collectionName: 'components_page_seos';
  info: {
    displayName: 'SEO';
    icon: 'search';
  };
  attributes: {
    property: Attribute.String;
    content: Attribute.String;
  };
}

export interface PageButton extends Schema.Component {
  collectionName: 'components_page_buttons';
  info: {
    displayName: 'button';
    icon: 'bulletList';
  };
  attributes: {
    title: Attribute.String;
    content: Attribute.Text;
    hyperlinks: Attribute.String;
  };
}

export interface PageButtonZone extends Schema.Component {
  collectionName: 'components_page_button_zones';
  info: {
    displayName: 'button-zone';
    icon: 'arrowRight';
  };
  attributes: {
    title: Attribute.String;
    content: Attribute.Blocks;
    buttons: Attribute.Component<'page.button', true>;
  };
}

export interface ElementsPricingCard extends Schema.Component {
  collectionName: 'components_elements_pricing_cards';
  info: {
    displayName: 'pricing card';
    icon: 'handHeart';
  };
  attributes: {
    planType: Attribute.String;
    planPricing: Attribute.String;
    isFeatured: Attribute.Boolean & Attribute.DefaultTo<false>;
    services: Attribute.Relation<
      'elements.pricing-card',
      'oneToMany',
      'api::service.service'
    >;
    link: Attribute.Component<'elements.button-link'>;
  };
}

export interface ElementsCard extends Schema.Component {
  collectionName: 'components_elements_cards';
  info: {
    displayName: 'card';
    icon: 'layout';
  };
  attributes: {
    image: Attribute.Media<'images'>;
    heading: Attribute.String;
    text: Attribute.Text;
  };
}

export interface ElementsButtonLink extends Schema.Component {
  collectionName: 'components_elements_button_links';
  info: {
    displayName: 'button-link';
    icon: 'arrowRight';
  };
  attributes: {
    title: Attribute.String;
    link: Attribute.String;
    isExtranal: Attribute.Boolean & Attribute.DefaultTo<false>;
    type: Attribute.Enumeration<['PRIMARY', 'SECONDARY']>;
  };
}

export interface BlocksRow extends Schema.Component {
  collectionName: 'components_blocks_rows';
  info: {
    displayName: 'row';
    icon: 'bulletList';
  };
  attributes: {
    card: Attribute.Component<'elements.card', true>;
  };
}

export interface BlocksPricing extends Schema.Component {
  collectionName: 'components_blocks_pricings';
  info: {
    displayName: 'pricing';
    icon: 'book';
  };
  attributes: {
    name: Attribute.String;
    description: Attribute.String;
    plan: Attribute.Component<'elements.pricing-card', true>;
  };
}

export interface BlocksHero extends Schema.Component {
  collectionName: 'components_blocks_heroes';
  info: {
    displayName: 'hero';
    icon: 'dashboard';
  };
  attributes: {
    heading: Attribute.String;
    text: Attribute.Text;
    link: Attribute.Component<'elements.button-link'>;
    image: Attribute.Media<'images'>;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'seo.meta-data': SeoMetaData;
      'page.seo': PageSeo;
      'page.button': PageButton;
      'page.button-zone': PageButtonZone;
      'elements.pricing-card': ElementsPricingCard;
      'elements.card': ElementsCard;
      'elements.button-link': ElementsButtonLink;
      'blocks.row': BlocksRow;
      'blocks.pricing': BlocksPricing;
      'blocks.hero': BlocksHero;
    }
  }
}
