type Props = {
  children?: React.ReactNode;
};

export default function PageContainer({ children }: Props) {
  return <main>{children}</main>;
}
