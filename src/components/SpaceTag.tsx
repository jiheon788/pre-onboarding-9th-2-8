import { ISpaceTagProps } from '@/interface/props';
import { Tag } from '@chakra-ui/react';

const SpaceTag = ({
  spaceKey,
  spaceHashMap,
  onToggleSpace,
}: ISpaceTagProps) => {
  return (
    <Tag
      key={spaceKey}
      variant={spaceHashMap[spaceKey] ? 'solid' : 'outline'}
      colorScheme="blue"
      onClick={() => onToggleSpace(spaceKey)}
    >
      {spaceKey}
    </Tag>
  );
};

export default SpaceTag;
