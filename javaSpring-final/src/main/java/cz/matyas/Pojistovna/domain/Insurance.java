package cz.matyas.Pojistovna.domain;

import jakarta.annotation.Nonnull;
import jakarta.annotation.Nullable;

import java.sql.Timestamp;
import java.time.Instant;
import java.util.Objects;

public class Insurance {
    @Nullable
    private Integer id;
    @Nonnull
    private Integer userId;
    @Nonnull
    private  String typeOfInsurance;
    @Nonnull
    private Timestamp createdAt;
    @Nonnull
    private String insuredItem;
    @Nonnull
    private Integer sum;

    public Insurance() {
    }

    public Insurance(Integer id, Integer userId, String typeOfInsurance, String insuredItem, Integer sum) {
        this.id = id;
        this.userId = userId;
        this.typeOfInsurance = typeOfInsurance;
        this.createdAt = Timestamp.from(Instant.now());
        this.insuredItem = insuredItem;
        this.sum = sum;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Integer getUserId() {
        return userId;
    }

    public void setUserId(Integer userId) {
        this.userId = userId;
    }

    public String getTypeOfInsurance() {
        return typeOfInsurance;
    }

    public void setTypeOfInsurance(String typeOfInsurance) {
        this.typeOfInsurance = typeOfInsurance;
    }

    public Timestamp getCreatedAt() {
        return createdAt;
    }

    public void setCreatedAt(Timestamp createdAt) {
        this.createdAt = createdAt;
    }

    public String getInsuredItem() {
        return insuredItem;
    }

    public void setInsuredItem(String insuredItem) {
        this.insuredItem = insuredItem;
    }

    public Integer getSum() {
        return sum;
    }

    public void setSum(Integer sum) {
        this.sum = sum;
    }

    @Override
    public String toString() {
        return "Incurance{" +
                "id=" + id +
                ", userId=" + userId +
                ", typeOfInsurance='" + typeOfInsurance + '\'' +
                ", createdAt=" + createdAt +
                ", insuredItem='" + insuredItem + '\'' +
                ", sum=" + sum +
                '}';
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Insurance insurance = (Insurance) o;
        return Objects.equals(id, insurance.id) && Objects.equals(userId, insurance.userId) && Objects.equals(typeOfInsurance, insurance.typeOfInsurance) && Objects.equals(createdAt, insurance.createdAt) && Objects.equals(insuredItem, insurance.insuredItem) && Objects.equals(sum, insurance.sum);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, userId, typeOfInsurance, createdAt, insuredItem, sum);
    }
}
