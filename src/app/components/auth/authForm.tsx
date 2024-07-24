import Input from '@mui/joy/Input';
import Grid from '@mui/joy/Grid';
import Sheet from '@mui/joy/Sheet';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import CardActions from '@mui/joy/CardActions';
import { appColors } from '@/app/utils/style';
import Image from 'next/image';
import Typography from '@mui/joy/Typography';
import Button from '@mui/joy/Button';

export default function authForm() {
  const { primary, secondary, tertiary } = appColors;
  return (
    <Grid
      component={Sheet}
      container
      bgcolor={primary}
      sx={{
        height: '100vh',
        width: '100vw',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Grid xs={12} md={6} padding={2} lg={5}>
        <Card
          sx={{
            width: '100%',
            maxWidth: '100%',
            boxShadow: 'lg',
          }}
        >
          <Typography level="h1">{'Connexion'}</Typography>
          <Typography level="body-sm">
            {"Vous n'avez pas de compte ? "}
            <span
              style={{
                color: secondary,
                cursor: 'pointer',
              }}
            >
              {'Inscrivez-vous'}
            </span>
          </Typography>

          <CardContent>
            <Grid container spacing={1}>
              <Grid xs={12}>
                <Input placeholder="Entrez votre email" />
              </Grid>
              <Grid xs={12}>
                <Input placeholder="Entrez votre mot de passe" />
              </Grid>
            </Grid>
            <Grid>
              <Typography
                level="body-sm"
                sx={{
                  textAlign: 'end',

                  width: '100%',
                }}
              >
                {'Mot de passe oublié ?'}
              </Typography>
            </Grid>
          </CardContent>
          <CardActions>
            <Button
              sx={{
                bgcolor: secondary,
                color: 'white',
              }}
            >
              {'Connexion'}
            </Button>
          </CardActions>
        </Card>
      </Grid>
      <Grid xs={12} md={6} lg={7} container padding={2}>
        <Grid
          xs={12}
          justifyContent="center"
          alignItems="center"
          display="flex"
        >
          <Image
            src="/logo/Logo-transparent.png"
            alt="register"
            width={300}
            height={300}
          />
        </Grid>
        <Grid
          xs={12}
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <Typography
            level="title-lg"
            sx={{
              color: 'white',
              textAlign: 'center',
              marginBottom: 2,
            }}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde harum
            distinctio dignissimos iure id aspernatur deleniti similique.
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
}
