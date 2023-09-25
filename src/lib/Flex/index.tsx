import {
  CSSProperties,
  ElementType,
  ReactElement,
  ReactNode,
  forwardRef,
} from 'react';
import {
  CommonProps,
  PolymorphicComponentProps,
  PolymorphicRef,
} from '../types/common';
import * as S from './style';

export interface FlexProps {
  justifyContent?: CSSProperties['justifyContent'];
  alignItems?: CSSProperties['alignItems'];
  direction?: CSSProperties['flexDirection'];
  flexWrap?: CSSProperties['flexWrap'];
  gap?: string;
}

type FlexComponent = <T extends ElementType>(
  props: PolymorphicComponentProps<T, FlexProps>
) => ReactNode | ReactElement | null;

const Flex: FlexComponent = forwardRef(function Flex<
  T extends ElementType = 'div'
>(
  { css, as, children, ...rest }: FlexProps & CommonProps<T>,
  ref: PolymorphicRef<T>
) {
  return (
    <S.Component as={as} ref={ref} style={css} {...rest}>
      {children}
    </S.Component>
  );
});

export default Flex;
