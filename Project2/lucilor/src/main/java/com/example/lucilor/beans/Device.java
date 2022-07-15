package com.example.lucilor.beans;

public class Device {
    private int phoneNumber;
    private String phoneModel;
    private String phoneNickname;

    public Device() {}

    public Device(int phoneNumber, String phoneModel, String phoneNickname) {
        super();
        this.phoneNumber = phoneNumber;
        this.phoneModel = phoneModel;
        this.phoneNickname = phoneNickname;
    } 

    public int getPhoneNumber() {
        return phoneNumber;
    }

    public void setPhoneNumber(int phoneNumber) {
        this.phoneNumber = phoneNumber;
    }

    public String getPhoneModel() {
        return phoneModel;
    }

    public void setPhoneModel(String phoneModel) {
        this.phoneModel = phoneModel;
    }

    public String getPhoneNickname() {
        return phoneNickname;
    }

    public void setPhoneNickname(String phoneNickname) {
        this.phoneNickname = phoneNickname;
    }



    @Override
    public String toString() {
        return "Device [phoneNumber=" + phoneNumber + 
               ", phoneModel=" + phoneModel + 
               ", phoneNickname=" + phoneNickname + 
               "]";
    }

}

