interface CredentialsId {
  params: Promise<{
    credentialsId: string;
  }>;
}
export default async function CredentialsId({ params }: CredentialsId) {
  const { credentialsId } = await params;
  return <div>CredentialsId: {credentialsId}</div>;
}
