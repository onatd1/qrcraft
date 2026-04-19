type Props = {
  text: string;
};

export default function SectionTitle({ text }: Props) {
  return <h3>{text}</h3>;
}
