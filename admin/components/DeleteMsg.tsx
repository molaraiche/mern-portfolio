"use client";
import axios from "axios";
import React from "react";
import { toast } from "react-toastify";
interface DeleteProps {
  id?: string | number;
}

const DeleteMsg: React.FC<DeleteProps> = ({ id }) => {
  const deleteHandler = async (id: string | number | undefined) => {
    if (!id) {
      toast.error("Invalid ID");
      return;
    }

    try {
      await axios.delete(`https://api.molaraiche.com/api/contact/${id}`);
      toast.success("Mail deleted successfully");
    } catch (error) {
      console.error("Error deleting Mail:", error);
      toast.error("We couldn't delete the Mail");
    }
  };

  return (
    <button
      onClick={() => deleteHandler(id)}
      className='ml-2 px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600'
      disabled={!id}>
      Remove
    </button>
  );
};

export default DeleteMsg;
