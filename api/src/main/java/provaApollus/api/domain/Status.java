package provaApollus.api.domain;

public enum Status {
    ATIVO("ATIVO"),
    INATIVO("INATIVO");

    private String status;

    Status(String status){
        this.status = status;
    }

    public String getStatus(){
        return status;
    }
}
