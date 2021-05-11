export enum CTAVariant {
  Primary = 'btn-primary',
  PrimaryWhite = 'btn-primary-white',
  PrimaryFlat = 'btn-primary-flat',
  PrimaryFlatWhite = 'btn-primary-flat-white',
  Secondary = 'btn-secondary',
  SecondaryWhite = 'btn-secondary-white',
  Tertiary = 'btn-tertiary'
}

export interface CTAProps {
  text?: string;
  id?: string;
  className?: string;
  dataQaId?: string;
  disabled?: boolean;
  name?: string;
  type?: 'submit' | 'reset' | 'button';
  variant: CTAVariant;
}
