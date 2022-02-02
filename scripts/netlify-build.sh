CECIL_CACHE_DIR=${CECIL_CACHE_DIR%/}
CECIL_CACHE_DIR="$CECIL_CACHE_DIR/$BRANCH"

echo "Downloading Cecil"
if [ -z $CECIL_VERSION ]; then
  curl -sSOL https://cecil.app/cecil.phar
else
  curl -sSOL https://cecil.app/download/$CECIL_VERSION/cecil.phar
fi
php cecil.phar --version

# Build CSS
sha1sum -c "${CECIL_CACHE_DIR}/${CSS_INPUT}.sha1" --status
if [ $? = 0 ]; then
  echo "Loads CSS from cache"
  cat "$CECIL_CACHE_DIR/$CSS_INPUT.sha1"
  cp $CECIL_CACHE_DIR/$CSS_OUPUT $CSS_OUPUT
else
  echo "Started CSS build"
  #npx tailwindcss -i $CSS_INPUT -o $CSS_OUPUT
  if [ $? = 0 ]; then echo "Finished CSS build"; else echo "CSS build fail..."; exit 1; fi
  # cache
  echo "Caches CSS file."
  mkdir -p $(dirname "${CECIL_CACHE_DIR}/${CSS_OUPUT}")
  cp $CSS_OUPUT $CECIL_CACHE_DIR/$CSS_OUPUT
  sha1sum $CSS_INPUT > "$CECIL_CACHE_DIR/$CSS_INPUT.sha1"
  cat "$CECIL_CACHE_DIR/$CSS_INPUT.sha1"
fi

if [[ $CECIL_ENV != "production" ]]; then
  php cecil.phar build -vv --baseurl=$DEPLOY_PRIME_URL --drafts || { sleep 30; false; }
else
  php cecil.phar build -v --baseurl=$URL --postprocess
fi
if [ $? != 0 ]; then echo "Cecil build fail..."; exit 1; fi

# build success? can deploy?
if [ $? = 0 ]; then echo "Finished build"; exit 0; fi

echo "Interrupted build"; exit 1
