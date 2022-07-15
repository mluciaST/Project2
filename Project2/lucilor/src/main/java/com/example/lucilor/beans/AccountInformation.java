package com.example.lucilor.beans;

public class AccountInformation {
    private int accountNumber;
    private String addressLine1;
    private String addressLine2;
    private String city;
    private String dateOfBirth;
    private String email;
    private String firstName;
    private String lastName;
    private int phoneNumber;
    private int plans;
    private String state;
    private int zip;

    public AccountInformation() {
    }

    public AccountInformation(int accountNumber, String addressLine1, String addressLine2, String city,
            String dateOfBirth,
            String email, String firstName, String lastName, int phoneNumber, int plans, String state, int zip) {
        super();
        this.accountNumber = accountNumber;
        this.addressLine1 = addressLine1;
        this.addressLine2 = addressLine2;
        this.city = city;
        this.dateOfBirth = dateOfBirth;
        this.email = email;
        this.firstName = firstName;
        this.lastName = lastName;
        this.phoneNumber = phoneNumber;
        this.plans = plans;
        this.state = state;
        this.zip = zip;
    }

    public int getAccountNumber() {
        return accountNumber;
    }

    public void setAccountNumber(int accountNumber) {
        this.accountNumber = accountNumber;
    }

    public String getAddressLine1() {
        return addressLine1;
    }

    public void setAddressLine1(String addressLine1) {
        this.addressLine1 = addressLine1;
    }

    public String getAddressLine2() {
        return addressLine2;
    }

    public void setAddressLine2(String addressLine2) {
        this.addressLine2 = addressLine2;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public String getDateOfBirth() {
        return dateOfBirth;
    }

    public void setDateOfBirth(String dateOfBirth) {
        this.dateOfBirth = dateOfBirth;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastname(String lastName) {
        this.lastName = lastName;
    }

    public int getPhoneNumber() {
        return phoneNumber;
    }

    public void setPhoneNumber(int phoneNumber) {
        this.phoneNumber = phoneNumber;
    }

    public int getPlans() {
        return plans;
    }

    public void setPlans(int plans) {
        this.plans = plans;
    }

    public String getState() {
        return state;
    }

    public void setState(String state) {
        this.state = state;
    }

    public int getZip() {
        return zip;
    }

    public void setZip(int zip) {
        this.zip = zip;
    }

    @Override
    public String toString() {
        return "AccountInformation [accountNumber=" + accountNumber +
                ", addressLine1=" + addressLine1 +
                ", addressLine2" + addressLine2 +
                ", city" + city +
                ", dateOfBirth" + dateOfBirth +
                ", email" + email +
                ", firstName" + firstName +
                ", lastName" + lastName +
                ", phoneNumber" + phoneNumber +
                ", plans" + plans +
                ", state" + state +
                ", zip" + zip +
                "]";
    }
}
