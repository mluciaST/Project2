package com.example.lucilor.beans;

public class Devices {
    private int accountNumber;
    private int devicesID;
    private int phoneNumber;

    public Devices() {
    }

    public Devices(int accountNumber, int devicesID, int phoneNumber) {
        super();
        this.accountNumber = accountNumber;
        this.devicesID = devicesID;
        this.phoneNumber = phoneNumber;
    }

    public int getAccountNumber() {
        return accountNumber;
    }

    public void setAccountNumber(int accountNumber) {
        this.accountNumber = accountNumber;
    }

    public int getDevicesID() {
        return devicesID;
    }

    public void setDevicesID(int devicesID) {
        this.devicesID = devicesID;
    }

    public int getPhoneNumber() {
        return phoneNumber;
    }

    public void setPhoneNumber(int phoneNumber) {
        this.phoneNumber = phoneNumber;
    }

    @Override
    public String toString() {
        return "Devices [accountNumber=" + accountNumber +
                "]";
    }
}
