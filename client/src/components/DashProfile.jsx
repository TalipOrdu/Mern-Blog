import { Alert, Button, TextInput } from "flowbite-react";
import { useEffect, useRef, useState, useCallback } from "react";
import { useSelector } from "react-redux";
import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytesResumable,
} from "firebase/storage";
import { app } from "../firebase";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { updateStart, updateSuccess, updateFailure } from "../redux/user/userSlice";
import { useDispatch } from "react-redux";


export default function DashProfile() {
  const { currentUser } = useSelector((state) => state.user);
  const [imageFile, setImageFile] = useState(null);
  const [imageFileUrl, setImageFileUrl] = useState(null);
  const filePickerRef = useRef();
  const [imageFileUploadProgress, setImageFileUploadProgress] = useState(0);
  const [imageFileUploadError, setImageFileUploadError] = useState(null);
  const [imageFileUploading, setImageFileUploading] = useState(false);
  const [updateUserSuccess, setUpdateUserSuccess] = useState(null);
  const [updateUserError, setUpdateUserError] = useState(null);
  const [uploadSuccess, setUploadSuccess] = useState(false); // New state for success alert
  const [formData, setFormData] = useState({});
  const dispatch = useDispatch();


  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImageFile(file);
      setImageFileUrl(URL.createObjectURL(file));
    }
  };

  const uploadImage = useCallback(async () => {
    if (!imageFile || !imageFile.name) {
      setImageFileUploadError(null);

      return;
    }
    setImageFileUploading(true);
    setImageFileUploadError(null);
    setUploadSuccess(false); // Reset success state before starting a new upload

    const storage = getStorage(app);
    const fileName = `${new Date().getTime()}_${imageFile.name}`;
    const storageRef = ref(storage, fileName);
    const uploadTask = uploadBytesResumable(storageRef, imageFile);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setImageFileUploadProgress(progress.toFixed(0));
        console.log("Upload is " + progress + "% done");
      },
      () => {
        setImageFileUploadError(
          "Couldn't upload image (file must be less than 2MB)"
        );
        setImageFileUploadProgress(null);
        setImageFile(null);
        setImageFileUrl(null);
        setImageFileUploading(false)
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setImageFile(downloadURL);
          setUploadSuccess(true); // Set success state
          setTimeout(() => {
            setUploadSuccess(false); // Hide the success alert after 2 seconds
          }, 2000);

          setFormData((prevFormData) => ({
            ...prevFormData,
            profilePicture: downloadURL,
          }));
          setImageFileUploading(false);

        });
      }
    );
  }, [imageFile]);

  useEffect(() => {
    if (imageFile) {
      uploadImage();
    }
  }, [imageFile, uploadImage]);

  const handleChange = (e) =>{
    setFormData({...formData, [e.target.id]: e.target.value});
  }
  
  const handleSubmit = async(e) =>{
    e.preventDefault();
    if(Object.keys(formData).length === 0){
      setUpdateUserError("No changes made");
      setTimeout(() => {
        setUpdateUserError(null);
      }, 2000);
      return;
    }
    if(imageFileUploading){
      setUpdateUserError("Plase wait for image to upload")
      setTimeout(() => {
        setUpdateUserError(null);
      }, 2000);
      return;
    }

    try {
      dispatch(updateStart());
      const res = await fetch(`/api/user/update/${currentUser._id}`,{
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();

      if(!res.ok){
        dispatch(updateFailure(data.message));
        setUpdateUserError(data.message);
        setTimeout(() => {
          setUpdateUserError(null);
        }, 2000);

      }else{
        dispatch(updateSuccess(data));
        setUpdateUserSuccess(true);

        setTimeout(() => {
          setUpdateUserSuccess(false);
        }, 2000);
      }

    } catch (error) {
      dispatch(updateFailure(error.message));
      setUpdateUserError(error.message);
      setTimeout(() => {
        setUpdateUserError(null);
      }, 2000);
    }
  }

  
  return (
    <div className="max-w-lg mx-auto p-3 w-full">
      <h1 className="my-7 text-center font-semibold text-3xl">Profile</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          ref={filePickerRef}
          hidden
        />
        <div
          className="relative w-32 h-33 self-center cursor-pointer shadow-md overflow-hidden rounded-full"
          onClick={() => {
            filePickerRef.current.click();
          }}
        >
          {imageFileUploadProgress && (
            <CircularProgressbar
              value={imageFileUploadProgress || 0}
              text={`${imageFileUploadProgress}%`}
              strokeWidth={5}
              styles={{
                root: {
                  width: "100%",
                  height: "100%",
                  position: "absolute",
                  top: 0,
                  left: 0,
                },
                path: {
                  stroke: `rgba(62,152,199, ${imageFileUploadProgress / 100})`,
                },
              }}
            />
          )}
          <img
            src={imageFileUrl || currentUser.profilePicture}
            alt="user"
            className={`rounded-full w-full h-full object-cover ${
              imageFileUploadProgress &&
              imageFileUploadProgress < 100 &&
              "opacity-60"
            }`}
          />
        </div>
        {imageFileUploadError && (
          <Alert color="failure">{imageFileUploadError}</Alert>
        )}
        {uploadSuccess && (
          <Alert color="success">Image successfully uploaded!</Alert>
        )}

        <TextInput
          type="text"
          id="username"
          placeholder="username"
          defaultValue={currentUser.username} onChange={handleChange}
        />
        <TextInput
          type="email"
          id="email"
          placeholder="email"
          defaultValue={currentUser.email} onChange={handleChange}
        />
        <TextInput
          type="password"
          id="password"
          placeholder="password"
          defaultValue="********" onChange={handleChange}
        />
        <Button type="submit" gradientDuoTone="purpleToBlue" outline>
          Update
        </Button>

        <div className="text-red-500 flex justify-between mt-5 ">
          <span className="cursor-pointer">Delete Account</span>
          <span className="cursor-pointer">Sign Out</span>
        </div>
        {updateUserSuccess && (
          <Alert color="success">Profile Successfully Updated!</Alert>
        )}
        {updateUserError && (
          <Alert color="failure">{updateUserError}</Alert>
        )}
        
      </form>
    </div>
  );
}
