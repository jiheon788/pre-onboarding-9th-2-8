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
      bg={spaceHashMap[spaceKey] ? '#FFF1DC' : 'white'}
      color="black"
      onClick={() => onToggleSpace(spaceKey)}
      cursor="pointer"
    >
      {spaceKey}
    </Tag>
  );
};

export default SpaceTag;
