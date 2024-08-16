let chai;
let chaiHttp;
let expect;

(async () => {
    const chaiImport = await import('chai');
    chaiHttp = await import('chai-http');
    chai = chaiImport.use(chaiHttp.default);
    expect = chaiImport.expect;

    // Esto asegura que chai esté configurado antes de que cualquier prueba se ejecute
    console.log("Chai and chai-http have been configured.");
})().catch(error => console.error("Error setting up chai:", error));

module.exports = { chai, chaiHttp, expect };