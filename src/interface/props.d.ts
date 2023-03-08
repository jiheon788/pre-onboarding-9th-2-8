export interface ISpaceTagProps {
  spaceKey: string;
  spaceHashMap: { [key: string]: boolean };
  onToggleSpace: (key: string) => void;
}
