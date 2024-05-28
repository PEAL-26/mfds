export async function generateFileFromUrl(url?: string | null) {
  if (!url) return null;

  const response = await fetch(url);
  const name = url.split('/').pop() || '';
  const data = await response.blob();

  const metadata = {
    type: data.type,
  };

  return new File([data], name, metadata);
}

export async function blobToBase64(blob: Blob | null) {
  return new Promise((resolve, _) => {
    const reader = new FileReader();
    reader.onloadend = () => resolve(reader.result);
    blob && reader.readAsDataURL(blob);
  });
}
