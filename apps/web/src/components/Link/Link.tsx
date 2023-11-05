import { Anchor } from '@mantine/core';
import type { AnchorProps, ElementProps } from '@mantine/core';

interface LinkProps extends AnchorProps, ElementProps<'a', keyof AnchorProps> {}

export const Link = (props: LinkProps): JSX.Element => <Anchor {...props} />;
