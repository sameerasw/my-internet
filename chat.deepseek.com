body[data-ds-dark-theme]{
  --dsr-bg: transparent !important;
  --dsr-side-bg: transparent !important
}

.b480065b{
  background: none;
}

div.fcaa63f8.d9fb9344, .fcaa63f8{
  display: none;
}

.dc04ec1d, div.ds-flex {
  opacity: 0;
  transition: opacity 0.3s ease-in-out;

  &:hover{
    opacity: 1;
  }
}

div.aaff8b8f {
  margin-bottom: 1em;
}
