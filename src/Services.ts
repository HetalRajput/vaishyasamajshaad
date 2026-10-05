import axios from "axios";
import { Base_URL } from "../Config";
import { Buffer } from 'buffer';

// ------Add to wishlist APi-----------------
export async function addToWishList<T>(id: any, userId: any) {
    const response = await axios.post(`${Base_URL}wishlist`, { userId, id });
    return response;
}

//get Wishlist Dat API--------------------
export async function getWishList<T>(userId: any) {
    const response = await axios.post(`${Base_URL}getwishlist`, { userId });
    return response;
}
//remove from wishlist API--------------------
export async function removeFromWishList<T>(id: any, userId: any) {
    const response = await axios.post(`${Base_URL}removewishlist`, { userId, id });
    return response;
}

//get Age Values
export function calculateAge(dateString: any) {
    // Parse the date string
    const birthDate = new Date(dateString);
    const today = new Date();

    // Calculate age in years
    let age = today.getFullYear() - birthDate.getFullYear();

    // Adjust age if the birthday hasn't occurred yet this year
    const monthDiff = today.getMonth() - birthDate.getMonth();
    const dayDiff = today.getDate() - birthDate.getDate();

    if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
        age--;
    }

    return age;
}

//get ALl Profile
export async function getAllProfiles() {
    const response = await axios.get(`${Base_URL}getallprofile`);
    return response;
}
//get Perfect Profile
export async function getPerfectMatches(Gotra: any, DOB: any,Gender:any) {
    console.log(Gotra,DOB,Gender);
    const GOT = Gotra?Gotra:'Bandil';
    
    
    const response = await axios.get(`${Base_URL}getperfectmatches/${Gender}/${btoa(GOT)}/${btoa(DOB)}`);
    return response;
}

export function Decode(str: string) {
    try{
        for (let i = 0; i <= 3; i++) {
            str = str.split("").reverse().join("");
            str = Buffer.from(str, "base64").toString("utf-8"); 
        }
        return str;
    }catch(e:any){
        console.error(e)
    }    
}