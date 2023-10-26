export const httpRegex = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/i;
export const usernameRegex =
  /^[a-zA-Z0-9àáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u;
export const emailRegex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
