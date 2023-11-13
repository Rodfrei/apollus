package provaApollus.api.domain;

public enum Funcao {
    ADMIN("ADMIN"),
    USER("USER");

    private String funcao;

    Funcao(String funcao){
        this.funcao = funcao;
    }

    public String getFuncao(){
        return funcao;
    }


}
