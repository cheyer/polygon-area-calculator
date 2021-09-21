interface IFileInputProps {
  disabled?: boolean;
  name: string;
  onChange: (event: React.SyntheticEvent<HTMLInputElement>) => void;
  selectedFile: File | null;
}

const FileInput: React.FC<IFileInputProps> = ({
  disabled,
  name,
  onChange,
  selectedFile,
}) => (
  <div>
    {selectedFile ? (
      <div className="container border rounded-md border-purple-700 px-4 py-2">
        <p>{selectedFile.name}</p>
        <p>{selectedFile.size / 1000} KB</p>
      </div>
    ) : (
      <label
        htmlFor="file-upload"
        className="flex justify-center border rounded-md text-purple-700 border-purple-700 hover:bg-purple-700 hover:text-white px-4 py-2 w-full md:w-auto cursor-pointer"
      >
        Select File
      </label>
    )}
    <input
      className="hidden"
      id="file-upload"
      accept=".json"
      type="file"
      name={name}
      onChange={onChange}
      disabled={disabled}
    />
  </div>
);

export default FileInput;
