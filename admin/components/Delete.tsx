"use client";
import axios from "axios";
import React from "react";
import { toast } from "react-toastify";
interface DeleteProps {
  id?: string | number;
}

const Delete: React.FC<DeleteProps> = ({ id }) => {
  const deleteHandler = async (id: string | number | undefined) => {
    if (!id) {
      toast.error("Invalid ID");
      return;
    }

    try {
      await axios.delete(`https://api.molaraiche.com/api/projects/${id}`);
      toast.success("Project deleted successfully");
    } catch (error) {
      console.error("Error deleting project:", error);
      toast.error("We couldn't delete the project");
    }
  };

  return (
    <button
      onClick={() => deleteHandler(id)}
      className='ml-2 px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600'
      disabled={!id}>
      Delete
    </button>
  );
};

export default Delete;
